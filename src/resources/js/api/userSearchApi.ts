import clientApi from "./_clientApi";
import type { User, UserSearchFilters, PaginatedResponse } from "../types/api";

export async function userSearchApi(
  filters: UserSearchFilters,
  page: number = 1,
  limit: number = 10
): Promise<PaginatedResponse<User>> {
  const { data } = await clientApi.post<PaginatedResponse<User>>("/users/search", {
    filters,
    page,
    limit,
  });

  return data;
}
