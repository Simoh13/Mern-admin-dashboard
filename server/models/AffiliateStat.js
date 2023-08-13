import mongoose from 'mongoose'

const AffiliateStatSchema = new mongoose.Schema(
    {
        userId: {type: mongoose.Types.ObjectId, ref: "User"},
        AffiliateSales: {
            type: [mongoose.Types.ObjectId],
            ref: "Transaction"
        }
    },
    {timestamps:true}
);

const AffiliateStat = mongoose.model("AffiliateStat", AffiliateStatSchema);

export default AffiliateStat;     