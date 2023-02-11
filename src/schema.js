import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => {
                return /^[\w\-\.]+@([\w-]+\.)+[\w-]+$/.test(email);
            }
        }
    },
    address: {
        type: {
            street: { type: String, required: true },
            suite: { type: String, required: true },
            city: {
                type: String,
                required: true,
                validate: {
                    validator: (city) => {
                        return /^[a-zA-Z\s]+$/.test(city);
                    }
                }
            },
            zipcode: {
                type: String,
                required: true ,
                validate: {
                    validator: (zipcode) => {
                        return /^\d{5}-\d{4}$/.test(zipcode);
                    }
                }
            },
            geo: {
                type: {
                    lat: { type: String, required: true },
                    lng: { type: String, required: true }
                },
                required: true
            }
        }

    },
    phone: {
        type: String,
        required: true,
        validate: {
            validator: (phone) => {
                return /^\d-\d{3}-\d{3}-\d{4}$/.test(phone);
            }
        }
    },
    website: {
        type: String,
        required: true,
        validate: {
            validator: (website) => {
                return /^https?:\/\//.test(website);
            }
        }
    },
    company: {
        type: {
            name: { type: String, required: true },
            catchPhrase: { type: String, required: true },
            bs: { type: String, required: true }
        },
        required: true
    }
});

export const UserModel = model("Users", UserSchema);
