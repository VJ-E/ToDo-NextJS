import mongoose, {Schema, Document} from "mongoose";

export interface ITodo extends Document{
    name: String;
    description: String;
    completed: boolean;
    createdAT: Date;
    updatedAt: Date;
}

const TodoSchema: Schema = new Schema({
    name: { type:String, required: true },
    description: { type: String },
    completed: { type: Boolean, default: false}
    },
    { timestamps: true }
);

export default mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);
