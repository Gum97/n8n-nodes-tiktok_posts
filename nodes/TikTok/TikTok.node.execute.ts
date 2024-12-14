import { IExecuteFunctions } from 'n8n-workflow';
import { apiRequest } from './GenericFunctions';

export async function execute(this: IExecuteFunctions) {
	const items = this.getInputData();
	const returnData = [];
	const resource = this.getNodeParameter('resource', 0) as string;
	const operation = this.getNodeParameter('operation', 0) as string;

	for (let i = 0; i < items.length; i++) {
		try {
			if (resource === 'post') {
				if (operation === 'create') {
					// Obter parâmetros
					const videoFile = this.getNodeParameter('videoFile', i) as string;
					const caption = this.getNodeParameter('caption', i) as string;
					const additionalFields = this.getNodeParameter('additionalFields', i) as {
						scheduleTime?: string;
						privacyLevel?: string;
						allowComments?: boolean;
					};

					// Preparar o formulário
					const formData = new FormData();
					formData.append('video', videoFile);
					formData.append('caption', caption);

					if (additionalFields.scheduleTime) {
						formData.append('schedule_time', additionalFields.scheduleTime);
					}

					if (additionalFields.privacyLevel) {
						formData.append('privacy_level', additionalFields.privacyLevel);
					}

					if (additionalFields.allowComments !== undefined) {
						formData.append('allow_comments', additionalFields.allowComments.toString());
					}

					// Fazer a requisição
					const response = await apiRequest.call(
						this,
						'POST',
						'/video/upload',
						formData,
						{},
						{
							headers: {
								'Content-Type': 'multipart/form-data',
							},
						},
					);

					returnData.push({
						json: response,
						pairedItem: {
							item: i,
						},
					});
				}

				if (operation === 'delete') {
					const postId = this.getNodeParameter('postId', i) as string;

					const response = await apiRequest.call(
						this,
						'DELETE',
						`/video/${postId}`,
					);

					returnData.push({
						json: response,
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
