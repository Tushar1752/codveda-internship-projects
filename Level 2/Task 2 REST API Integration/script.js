const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const errorMessage = document.getElementById("errorMessage");
const profile = document.getElementById("profile");
const welcome = document.getElementById("welcome");

const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const username = document.getElementById("username");
const bio = document.getElementById("bio");
const profileLink = document.getElementById("profileLink");

const repositories = document.getElementById("repositories");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const gists = document.getElementById("gists");

const locationElement = document.getElementById("location");
const company = document.getElementById("company");
const website = document.getElementById("website");
const joined = document.getElementById("joined");

const repositoriesContainer = document.getElementById(
    "repositoriesContainer"
);

const repoCount = document.getElementById("repoCount");

let debounceTimer;

function showLoading() {
    loading.classList.remove("hidden");
    error.classList.add("hidden");
    profile.classList.add("hidden");
    welcome.classList.add("hidden");
}

function showError(message) {
    loading.classList.add("hidden");
    profile.classList.add("hidden");
    welcome.classList.add("hidden");
    error.classList.remove("hidden");

    errorMessage.textContent = message;
}

function showProfile() {
    loading.classList.add("hidden");
    error.classList.add("hidden");
    welcome.classList.add("hidden");
    profile.classList.remove("hidden");
}

function formatNumber(number) {
    return new Intl.NumberFormat().format(number);
}

function formatDate(dateString) {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
}

function setWebsite(url) {
    if (!url) {
        website.textContent = "Not available";
        website.removeAttribute("href");
        return;
    }

    let validUrl = url;

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        validUrl = "https://" + url;
    }

    website.textContent = url;
    website.href = validUrl;
}

function displayRepositories(repos) {
    repositoriesContainer.innerHTML = "";

    if (repos.length === 0) {
        repositoriesContainer.innerHTML = `
            <div class="repo-card">
                <h3>No public repositories</h3>
                <p class="repo-description">
                    This user currently has no public repositories.
                </p>
            </div>
        `;

        repoCount.textContent = "0 repositories";
        return;
    }

    repoCount.textContent =
        `${repos.length} recent ${repos.length === 1 ? "repository" : "repositories"}`;

    repos.forEach(repo => {
        const card = document.createElement("div");

        card.className = "repo-card";

        card.innerHTML = `
            <h3>
                <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                </a>
            </h3>

            <p class="repo-description">
                ${repo.description || "No description available."}
            </p>

            <div class="repo-meta">
                <span class="repo-language">
                    ${repo.language || "Code"}
                </span>

                <span>
                    ⭐ ${formatNumber(repo.stargazers_count)}
                </span>

                <span>
                    🍴 ${formatNumber(repo.forks_count)}
                </span>
            </div>
        `;

        repositoriesContainer.appendChild(card);
    });
}

async function fetchRepositories(username) {
    const response = await fetch(
        `https://api.github.com/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
        throw new Error("Unable to fetch repositories.");
    }

    return response.json();
}

async function searchUser(usernameValue) {
    const cleanUsername = usernameValue.trim();

    if (!cleanUsername) {
        showError("Please enter a GitHub username.");
        return;
    }

    showLoading();

    try {
        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(cleanUsername)}`
        );

        if (response.status === 404) {
            throw new Error(
                "No GitHub user was found with this username."
            );
        }

        if (!response.ok) {
            throw new Error(
                "GitHub API is temporarily unavailable. Please try again."
            );
        }

        const user = await response.json();

        const repos = await fetchRepositories(cleanUsername);

        avatar.src = user.avatar_url;
        avatar.alt = `${user.login} GitHub profile`;

        name.textContent = user.name || user.login;
        username.textContent = `@${user.login}`;

        bio.textContent =
            user.bio || "This user has not added a bio yet.";

        profileLink.href = user.html_url;

        repositories.textContent =
            formatNumber(user.public_repos);

        followers.textContent =
            formatNumber(user.followers);

        following.textContent =
            formatNumber(user.following);

        gists.textContent =
            formatNumber(user.public_gists);

        locationElement.textContent =
            user.location || "Not available";

        company.textContent =
            user.company || "Not available";

        setWebsite(user.blog);

        joined.textContent =
            formatDate(user.created_at);

        displayRepositories(repos);

        showProfile();

    } catch (err) {
        showError(
            err.message ||
            "Something went wrong. Please try again."
        );
    }
}

searchBtn.addEventListener("click", () => {
    searchUser(usernameInput.value);
});

usernameInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        searchUser(usernameInput.value);
    }
});

usernameInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);

    const value = usernameInput.value.trim();

    if (!value) {
        profile.classList.add("hidden");
        error.classList.add("hidden");
        loading.classList.add("hidden");
        welcome.classList.remove("hidden");
        return;
    }

    debounceTimer = setTimeout(() => {
        searchUser(value);
    }, 700);
});