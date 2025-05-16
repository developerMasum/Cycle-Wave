export type TRole = "user" | "admin";
export type TUser = {
  email: string;
  role: TRole;
  iat: number;
  exp: number;
};

type ErrSource = {
  path?: string;
  message: string;
};

export type TError = {
  status?: number;
  data: {
    success?: boolean;
    message?: string;
    stack?: null;
    errorSource?: ErrSource[];
  };
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta: TMeta;
  success: boolean;
  message: string;
};

export type TQueryParams = {
  name?: string;
  value?: boolean | React.Key;
};
// import { USER_ROLE } from "@/constants/role";

// export type IMeta = {
//   page: number;
//   limit: number;
//   total: number;
// };

// export type UserRole = keyof typeof USER_ROLE;

// export interface IHeaderItem {
//   title: string;
//   path?: string;
//   subMenu?: IHeaderItem[];
// }
// export type ResponseSuccessType = {
//   data: any;
//   meta?: IMeta;
// };

// export type IGenericErrorResponse = {
//   statusCode: number;
//   message: string;
//   errorMessages: IGenericErrorMessage[];
// };

// export type IGenericErrorMessage = {
//   path: string | number;
//   message: string;
// };

// export const Gender = ["MALE", "FEMALE"];
// export const ApproveStatus = ["APPROVED", "CANCEL"];
// export const BlogCategory = [
//   "programming",
//   "technologies",
//   "devops",
//   "travels",
//   "foods",
//   "lifestyles",
//   "fashions",
//   "fitness",
//   "educations",
// ];

// export const Tags = [
//   "programming",
//   "technology",
//   "travel",
//   "food",
//   "lifestyle",
//   "fashion",
//   "fitness",
//   "health",
//   "business",
//   "finance",
//   "science",
//   "education",
//   "entertainment",
//   "music",
//   "sports",
//   "art",
//   "python",
//   "sql",
//   "nosql",
//   "writing",
//   "gaming",
//   "diy",
//   "parenting",
//   "react",
//   "frontend",
//   "css",
//   "javascript",
//   "typescript",
//   "database",
//   "backend",
//   "tools",
//   "productivity",
//   "psychology",
//   "socialmedia",
//   "startups",
//   "machine-learning",
//   "webdevelopment",
//   "datascience",
//   "javascript",
//   "typescript",
//   "algorithm",
//   "dev",
//   "ai",
// ];

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

// export type UserRole = keyof typeof USER_ROLE;

export interface IHeaderItem {
  title: string;
  path?: string;
  subMenu?: IHeaderItem[];
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export const Gender = ["MALE", "FEMALE"];
export const ApproveStatus = ["APPROVED", "CANCEL"];
export const BlogCategory = [
  "programming",
  "technologies",
  "devops",
  "travels",
  "foods",
  "lifestyles",
  "fashions",
  "fitness",
  "educations",
];

export const Tags = [
  "programming",
  "technology",
  "travel",
  "food",
  "lifestyle",
  "fashion",
  "fitness",
  "health",
  "business",
  "finance",
  "science",
  "education",
  "entertainment",
  "music",
  "sports",
  "art",
  "python",
  "sql",
  "nosql",
  "writing",
  "gaming",
  "diy",
  "parenting",
  "react",
  "frontend",
  "css",
  "javascript",
  "typescript",
  "database",
  "backend",
  "tools",
  "productivity",
  "psychology",
  "socialmedia",
  "startups",
  "machine-learning",
  "webdevelopment",
  "datascience",
  "javascript",
  "typescript",
  "algorithm",
  "dev",
  "ai",
];
