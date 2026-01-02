#!/bin/bash

# Complete setup script for creating and pushing to GitHub
# This script handles the entire process from git init to GitHub push

set -e

REPO_NAME="calyxe-ds"
VISIBILITY="public"

echo "🚀 Setting up GitHub repository for $REPO_NAME..."
echo ""

# Step 1: Check Xcode license (informational)
echo "📋 Step 1: Checking system requirements..."
if ! xcodebuild -version &>/dev/null; then
  echo "⚠️  Xcode license may need to be accepted."
  echo "   If git commands fail, run: sudo xcodebuild -license"
  echo ""
fi

# Step 2: Initialize git repository
echo "📦 Step 2: Initializing git repository..."
if [ -d ".git" ]; then
  echo "   Git repository already initialized."
else
  git init
  echo "   ✓ Git repository initialized."
fi
echo ""

# Step 3: Add all files
echo "📝 Step 3: Adding files to git..."
git add .
echo "   ✓ Files added to staging."
echo ""

# Step 4: Create initial commit
echo "💾 Step 4: Creating initial commit..."
if git diff --staged --quiet; then
  echo "   ⚠️  No changes to commit. Repository may already be committed."
else
  git commit -m "Initial commit: Calyxe Design System v2.0

- Design tokens with primitive and mapped collections
- Color, spacing, size, border-radius, and typography tokens
- CSS variables for all tokens
- TypeScript types for type-safe usage
- Aligned with Figma variable structure"
  echo "   ✓ Initial commit created."
fi
echo ""

# Step 5: Check GitHub CLI authentication
echo "🔐 Step 5: Checking GitHub CLI authentication..."
if ! gh auth status &>/dev/null; then
  echo "   ⚠️  GitHub CLI not authenticated."
  echo "   📋 Please run: gh auth login"
  echo "   Then run this script again, or continue manually:"
  echo ""
  echo "   gh repo create $REPO_NAME --$VISIBILITY --source=. --remote=origin --push"
  exit 1
fi

GITHUB_USER=$(gh api user --jq .login)
echo "   ✓ Authenticated as: $GITHUB_USER"
echo ""

# Step 6: Create GitHub repository and push
echo "🌐 Step 6: Creating GitHub repository and pushing code..."
if git remote | grep -q "^origin$"; then
  echo "   ⚠️  Remote 'origin' already exists."
  echo "   Pushing to existing remote..."
  git push -u origin main || git push -u origin master
else
  gh repo create $REPO_NAME --$VISIBILITY --source=. --remote=origin --push
  echo "   ✓ Repository created and code pushed."
fi
echo ""

# Step 7: Show repository URL
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME"
echo "✅ Setup complete!"
echo "🔗 Repository URL: $REPO_URL"
echo ""
echo "You can now view your repository at: $REPO_URL"

