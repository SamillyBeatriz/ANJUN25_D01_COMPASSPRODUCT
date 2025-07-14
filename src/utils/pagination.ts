type PaginationQuery = {
  page?: string;
  limit?: string;
};

export const getPagination = (query: PaginationQuery, defaultLimit = 5) => {
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || defaultLimit;
  const skip = (page - 1) * limit;
  return { page, limit, skip };
};
