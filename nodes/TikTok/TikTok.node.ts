import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import axios from 'axios';

export class TikTok implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'TikTok',
		name: 'tikTok',
		icon: 'file:tiktok.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Create and manage TikTok posts',
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
		properties: [
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
				],
				default: 'post',
			},
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: [
							'post',
						],
					},
				},
				options: [
					{
						name: 'Create',
						value: 'create',
						description: 'Create a new TikTok post',
						action: 'Create a TikTok post',
					},
				],
				default: 'create',
			},
			{
				displayName: 'Video File',
				name: 'videoFile',
				type: 'string',
				default: '',
				required: true,
				displayOptions: {
					show: {
						operation: [
							'create',
						],
						resource: [
							'post',
						],
					},
				},
				description: 'The video file to upload',
			},
			{
				displayName: 'Caption',
				name: 'caption',
				type: 'string',
				default: '',
				displayOptions: {
					show: {
						operation: [
							'create',
						],
						resource: [
							'post',
						],
					},
				},
				description: 'The caption for the TikTok post',
			},
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		// Get credentials
		const credentials = await this.getCredentials('tikTokApi');

		let response;

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'post') {
					if (operation === 'create') {
						const videoFile = this.getNodeParameter('videoFile', i) as string;
						const caption = this.getNodeParameter('caption', i) as string;

						// This is a simplified example. You'll need to implement the actual TikTok API calls
						// according to their documentation: https://developers.tiktok.com/doc/
						const headers = {
							'Authorization': `Bearer ${credentials.accessToken}`,
							'Content-Type': 'multipart/form-data',
						};

						// This is a placeholder for the actual API endpoint
						response = await axios.post(
							'https://open-api.tiktok.com/video/upload',
							{
								video: videoFile,
								caption: caption,
							},
							{ headers }
						);

						returnData.push({
							json: response.data,
							pairedItem: {
								item: i,
							},
						});
					}
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: {
							error: error.message,
						},
						pairedItem: {
							item: i,
						},
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
