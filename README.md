# TikTok N8N Posts

Módulo comunitário N8N poderoso para automatização de gerenciamento e postagem de conteúdo no TikTok. Este nó permite uma integração perfeita entre os fluxos de trabalho N8N e a plataforma TikTok, permitindo publicação e gerenciamento automatizado de conteúdo.

## 🌟 Funcionalidades

- **Criação Automatizada de Posts**: Agende e publique posts no TikTok automaticamente
- **Suporte para Upload de Vídeos**: Faça upload de conteúdo de vídeo diretamente através do N8N
- **Gerenciamento de Legendas**: Crie e gerencie legendas dos posts
- **Autenticação Segura**: Gerenciamento seguro de credenciais para a API do TikTok
- **Integração Fácil**: Integra-se perfeitamente com fluxos de trabalho N8N existentes

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:
- Uma conta ativa de desenvolvedor TikTok
- Credenciais da API do TikTok (Client Key e Client Secret)
- Token de Acesso válido do TikTok
- Instância N8N (versão 0.125.0 ou superior)

## 🚀 Instalação

1. **Via Nós Comunitários N8N:**
   ```bash
   npm install tiktok-n8n-posts
   ```

2. **Instalação Manual:**
   ```bash
   cd ~/.n8n/custom
   git clone https://github.com/C0d3Sn4p/tiktok_n8n_posts.git
   cd tiktok_n8n_posts
   npm install
   npm run build
   ```

## 🔑 Configuração da Autenticação

1. Acesse [TikTok for Developers](https://developers.tiktok.com/)
2. Crie uma nova aplicação
3. Anote suas credenciais:
   - Client Key
   - Client Secret
4. Gere um Token de Acesso através do fluxo OAuth do TikTok

## 💻 Como Usar

1. Adicione o nó TikTok ao seu fluxo de trabalho N8N
2. Configure suas credenciais da API do TikTok no N8N
3. Escolha a operação desejada:
   - Criar Post
   - Upload de Vídeo
   - Gerenciar Legendas
4. Configure os parâmetros da operação
5. Conecte com outros nós em seu fluxo de trabalho
6. Ative e execute seu fluxo de trabalho

## 🔄 Exemplos de Fluxo de Trabalho

### Criação Básica de Post
```json
{
  "operation": "create",
  "resource": "post",
  "videoFile": "caminho/para/video.mp4",
  "caption": "Confira este conteúdo incrível! #n8n #automacao"
}
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para enviar um Pull Request. Para mudanças importantes, abra uma issue primeiro para discutir o que você gostaria de mudar.

1. Faça um fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Faça commit de suas mudanças (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Faça push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- Agradecemos à equipe N8N por sua incrível plataforma de automação de fluxo de trabalho
- TikTok por fornecer as capacidades da API

## 📞 Suporte

Para suporte:
1. Verifique a [página de issues](https://github.com/C0d3Sn4p/tiktok_n8n_posts/issues)
2. Crie uma nova issue se seu problema ainda não estiver listado

## 🔄 Histórico de Versões

- 1.0.0
  - Lançamento inicial
  - Funcionalidade básica de criação de posts
  - Suporte para upload de vídeos
  - Gerenciamento de legendas
