import envConfig from "@/config";
import { http } from "@/lib/http";
import {
  LoginRequestType,
  LoginResponseType,
  RegisterCandidateRequestType,
} from "@/schemaValidations/auth.schema";

export const authAPI = {
  login: (data: LoginRequestType) =>
    http.post<LoginResponseType>(
      `${envConfig().NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
      data
    ),
  authServer: (data: LoginResponseType) => http.post("/api/auth", data),
};

export const registerAPI = {
  candidate: (data: RegisterCandidateRequestType) => {
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("password", data.password)
    formData.append("confirmPassword", data.confirmPassword)
    formData.append("name", data.name)
    formData.append("phone", data.phone)
    formData.append("gender", data.gender)
    if (data.birthday) formData.append("birthday", data.birthday)
    if (data.location) formData.append("location", data.location)
    if (data.avatar instanceof File) {
      formData.append("avatar", data.avatar)
    }

    return http.post(
      `${envConfig().NEXT_PUBLIC_API_ENDPOINT}/auth/register/candidate`,
      formData
    )
  },
}
