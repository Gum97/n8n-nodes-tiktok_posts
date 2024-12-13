# TikTok N8N Posts

A powerful N8N community node for automating TikTok content management and posting. This node enables seamless integration between N8N workflows and TikTok's platform, allowing for automated content publishing and management.

## 🌟 Features

- **Automated Post Creation**: Schedule and publish TikTok posts automatically
- **Video Upload Support**: Upload video content directly through N8N
- **Caption Management**: Create and manage post captions
- **Secure Authentication**: Built-in secure credential management for TikTok API
- **Easy Integration**: Seamlessly integrates with existing N8N workflows

## 📋 Prerequisites

Before you begin, ensure you have:
- An active TikTok Developer Account
- TikTok API credentials (Client Key and Client Secret)
- Valid Access Token from TikTok
- N8N instance (version 0.125.0 or higher)

## 🚀 Installation

1. **Via N8N Community Nodes:**
   ```bash
   npm install tiktok-n8n-posts
   ```

2. **Manual Installation:**
   ```bash
   cd ~/.n8n/custom
   git clone https://github.com/C0d3Sn4p/tiktok_n8n_posts.git
   cd tiktok_n8n_posts
   npm install
   npm run build
   ```

## 🔑 Authentication Setup

1. Visit [TikTok for Developers](https://developers.tiktok.com/)
2. Create a new application
3. Note down your:
   - Client Key
   - Client Secret
4. Generate an Access Token through TikTok's OAuth flow

## 💻 Usage

1. Add the TikTok node to your N8N workflow
2. Configure your TikTok API credentials in N8N
3. Choose your desired operation:
   - Create Post
   - Upload Video
   - Manage Captions
4. Configure the operation parameters
5. Connect with other nodes in your workflow
6. Activate and run your workflow

## 🔄 Workflow Examples

### Basic Post Creation
```json
{
  "operation": "create",
  "resource": "post",
  "videoFile": "path/to/video.mp4",
  "caption": "Check out this awesome content! #n8n #automation"
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the N8N team for their amazing workflow automation platform
- TikTok for providing the API capabilities

## 📞 Support

For support, please:
1. Check the [issues page](https://github.com/C0d3Sn4p/tiktok_n8n_posts/issues)
2. Create a new issue if your problem isn't already listed

## 🔄 Version History

- 1.0.0
  - Initial release
  - Basic post creation functionality
  - Video upload support
  - Caption management
