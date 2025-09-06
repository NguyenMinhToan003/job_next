import { CardContent, CardHeader } from "@/components/ui/card";

export default function RegisterEmployerLayout({children}: {children: React.ReactNode}) {
  return <>
    <CardHeader className="text-center">
      <h2 className="text-2xl font-bold">Đăng ký nhà tuyển dụng</h2>
      <p className="text-sm text-muted-foreground">Hãy tạo tài khoản nhà tuyển dụng của bạn</p>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </>;
}