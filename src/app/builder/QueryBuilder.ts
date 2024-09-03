import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public modelQuery: Query<T[], T>;
    public query: Record<string, unknown>;

    constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
        this.modelQuery = modelQuery;
        this.query = query;
    }

    search(searchAbleFields: string[]) {
        const searchTerm = this?.query?.search;

        if (searchTerm) {
            this.modelQuery = this.modelQuery.find({
                $or: searchAbleFields.map((field) => ({
                    [field]: {
                        $regex: searchTerm,
                        $options: "i"
                    }
                }) as FilterQuery<T>,
                ),
            })
        }

        return this
    }

    filter() {
        const queryObj = { ...this.query }; // copy

        // Filtering
        const excludeFields = ["page", "sort", "limit", "fields", "searchTerm"];

        excludeFields.forEach((el) => delete queryObj[el]);

        this.modelQuery = this.modelQuery.find(queryObj as FilterQuery<T>);
        return this
    }

    sort() {
        const sort = (this?.query?.sort as string) || "-createdAt";
        this.modelQuery = this.modelQuery.sort(sort);
        return this
    } 

    paginate() {
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const skip = (page - 1) * limit;
        this.modelQuery = this.modelQuery.skip(skip).limit(limit);
        return this
    }

    fields() {
        const fields = (this?.query?.fields as string)?.split(",").join(" ") || "";
        this.modelQuery = this.modelQuery.select(fields);
        return this
    }

    async countTotal() {
        const totalQueries = this.modelQuery.getFilter();
        const total = await this.modelQuery.countDocuments(totalQueries);
        const page = Number(this?.query?.page) || 1;
        const limit = Number(this?.query?.limit) || 10;
        const totalPages = Math.ceil(total / limit);

        return {
            page,
            limit,
            total,
            totalPages
        }
    }

}

export default QueryBuilder