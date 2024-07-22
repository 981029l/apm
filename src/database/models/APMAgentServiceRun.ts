import { HydratedDocument, InferSchemaType, Schema, model } from 'mongoose';

//Same fields as Parse.com
const schema = new Schema(
	{
		wfId: { type: String },
		nodeId: { type: String },
		roundId: { type: String },
		name: { type: String },
		version: { type: String },
		input: { type: Object },
		output: { type: Object },
		tenant: { type: String },
	},

	{ timestamps: true }
);

export type APMAgentServiceRunType = HydratedDocument<InferSchemaType<typeof schema>>;
export const APMAgentServiceRun = model('APMAgentServiceRun', schema);