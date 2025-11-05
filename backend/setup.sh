#!/bin/bash

# Resumate Backend Setup Script
# This script helps you set up the backend quickly

echo "🚀 Starting Resumate Backend Setup..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js $(node --version) found"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✅ npm $(npm --version) found"
echo ""

# Navigate to backend directory
cd "$(dirname "$0")"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    
    # Install additional dependencies for auth
    echo "📦 Installing authentication dependencies..."
    npm install bcryptjs jsonwebtoken
    
    if [ $? -eq 0 ]; then
        echo "✅ Dependencies installed successfully"
    else
        echo "❌ Failed to install dependencies"
        exit 1
    fi
else
    echo "✅ Dependencies already installed"
fi

echo ""

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    
    echo "⚠️  IMPORTANT: Please edit the .env file and add your:"
    echo "   1. MongoDB connection string (MONGO_URI)"
    echo "   2. OpenAI API key (OPENAI_API_KEY)"
    echo "   3. JWT secret (JWT_SECRET)"
    echo ""
    echo "   Generate JWT secret with:"
    echo "   node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\""
    echo ""
    
    read -p "Press Enter to open .env file in your default editor..."
    
    # Try to open .env in editor
    if command -v code &> /dev/null; then
        code .env
    elif command -v nano &> /dev/null; then
        nano .env
    elif command -v vim &> /dev/null; then
        vim .env
    else
        echo "Please open .env file manually and configure it."
    fi
else
    echo "✅ .env file already exists"
    echo "⚠️  Make sure your .env file is properly configured"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure your .env file with actual values"
echo "2. Start the development server: npm run dev"
echo "3. Or start production server: npm start"
echo ""
echo "📚 For detailed setup instructions, see BACKEND_SETUP.md"
echo ""
