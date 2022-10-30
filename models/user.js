const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
       username:{
           type:String,
           unique:true,
           required:true,
           trimmed:true,
       },
       email:{
           type:String,
           required:true,
           unique:true,
           match: /.+\@.+\..+/,
       },
       thoughts: {
           type:Schema.thought.id,
           ref: 'thought'
       },
       friends:{
           type: Schema.user.id,
           ref: 'user'
       },
    }
)

userSchema.virtual("friendCount").get(()=>{
    return this.friends.length
});
