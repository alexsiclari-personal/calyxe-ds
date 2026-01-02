#!/bin/bash

# Setup script for creating and pushing to GitHub repository
# Run this script after resolving Xcode license: sudo xcodebuild -license

set -e

REPO_NAME="calyxe-ds"
VISIBILITY="public"  # Change to "private" if you want a private repository

echo "🚀 Setting up GitHub repository for $REPO_NAME..."

# Check if GitHub CLI is authenticated
if ! gh auth status &>/dev/null; then
  echo "⚠️  GitHub CLI not authenticated."
  echo "📋 Please run: gh auth login"
  echo "   Then run this script again."
  exit 1
fi

# Get GitHub username
GITHUB_USER=$(gh api user --jq .login)
echo "👤 Authenticated as: $GITHUB_USER"

# Initialize git repository (if not already initialized)
if [ ! -d ".git" ]; then
  echo "📦 Initializing git repository..."
  git init
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Calyxe Design System v2.0

- Design tokens with primitive and mapped collections
- Color, spacing, size, border-radius, and typography tokens
- CSS variables for all tokens
- TypeScript types for type-safe usage
- Aligned with Figma variable structure"

# Create GitHub repository
echo "🌐 Creating $VISIBILITY GitHub repository..."
gh repo create $REPO_NAME --$VISIBILITY --source=. --remote=origin --push

echo ""
echo "✅ Repository created and pushed to GitHub!"
echo "🔗 Repository URL: https://github.com/$GITHUB_USER/$REPO_NAME"

