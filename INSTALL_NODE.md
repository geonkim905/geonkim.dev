# Installing Node.js and npm

Node.js and npm are not currently installed on your system. Here's how to install them on macOS:

## Option 1: Install via Homebrew (Recommended if you have Homebrew)

If you have Homebrew installed, run:

```bash
brew install node
```

To check if you have Homebrew:
```bash
brew --version
```

If Homebrew is not installed, you can install it first:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then install Node.js:
```bash
brew install node
```

## Option 2: Download Installer from nodejs.org (Easiest)

1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version for macOS
3. Run the installer (`.pkg` file)
4. Follow the installation wizard
5. Restart your terminal after installation

This will install both Node.js and npm.

## Option 3: Use nvm (Node Version Manager) - Recommended for Developers

nvm allows you to install and manage multiple Node.js versions:

1. Install nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Restart your terminal or run:
```bash
source ~/.zshrc
```

3. Install the latest LTS version of Node.js:
```bash
nvm install --lts
nvm use --lts
```

## Verify Installation

After installation, verify it worked by running:

```bash
node --version
npm --version
```

You should see version numbers (e.g., `v20.10.0` and `10.2.3`).

## After Installing Node.js

Once Node.js is installed, you can proceed with:

```bash
cd /Users/geonkim/Desktop/personal_website
npm install
npm run dev
```

## Recommended Version

For this project, **Node.js 18 or higher** is recommended. The LTS version from nodejs.org will work perfectly.

---

**Quick Tip**: After installing Node.js, make sure to:
1. Close and reopen your terminal (or run `source ~/.zshrc` if using nvm)
2. Navigate to your project directory
3. Run `npm install`
