#!/bin/bash

echo "=== Starting aerOS Presentation Setup ==="
echo "Checking Node.js installation..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js to continue."
    exit 1
fi

NODE_VERSION=$(node -v)
echo "Node.js version: $NODE_VERSION"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "npm is not installed. Please install npm to continue."
    exit 1
fi

NPM_VERSION=$(npm -v)
echo "npm version: $NPM_VERSION"

echo "Installing dependencies..."
npm install

# Check if the installation was successful
if [ $? -ne 0 ]; then
    echo "Failed to install dependencies. Please check error messages above."
    exit 1
fi

echo "Dependencies installed successfully!"
echo "Starting the development server..."

# Start the development server
npm start

# This part will only execute if npm start exits
echo "Development server stopped." 