import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class TikTok implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TikTok',
		name: 'tiktok',
		icon: 'file:tiktok.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Crie e gerencie posts no TikTok',
		defaults: {
			name: 'TikTok',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'tikTokApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://open-api.tiktok.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Recursos
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Post',
						value: 'post',
					},
					{
						name: 'Video',
						value: 'video',
					},
				],
				default: 'post',
			},
			// Operações para Posts
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['post'],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Criar uma nova postagem',
						action: 'Create a post',
					},
					{
						name: 'Delete',
						value: 'delete',
						description: 'Excluir uma postagem',
						action: 'Delete a post',
					},
				],
				default: 'create',
			},
			// Campos para criação de post
			{
				displayName: 'Video File',
				name: 'videoFile',
				type: 'string',
				required: true,
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['post'],
					},
				},
				default: '',
				description: 'Arquivo de vídeo para upload',
			},
			{
				displayName: 'Caption',
				name: 'caption',
				type: 'string',
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['post'],
					},
				},
				default: '',
				description: 'Legenda para a postagem',
			},
			// Campos adicionais
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				placeholder: 'Add Field',
				default: {},
				displayOptions: {
					show: {
						operation: ['create'],
						resource: ['post'],
					},
				},
				options: [
					{
						displayName: 'Schedule Time',
						name: 'scheduleTime',
						type: 'dateTime',
						default: '',
						description: 'Data e hora para agendar a postagem',
					},
					{
						displayName: 'Privacy Level',
						name: 'privacyLevel',
						type: 'options',
						options: [
							{
								name: 'Public',
								value: 'public',
							},
							{
								name: 'Friends',
								value: 'friends',
							},
							{
								name: 'Private',
								value: 'private',
							},
						],
						default: 'public',
					},
					{
						displayName: 'Allow Comments',
						name: 'allowComments',
						type: 'boolean',
						default: true,
						description: 'Se comentários são permitidos na postagem',
					},
				],
			},
		],
	};
}
