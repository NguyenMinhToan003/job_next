import { CardContent, CardHeader } from "@/components/ui/card";

export default function RegisterCandadateLayout({children}: {children: React.ReactNode}) {
  return <>
    <CardHeader className="text-center">
      <h2 className="text-2xl font-bold">Đăng ký ứng viên</h2>
      <p className="text-sm text-muted-foreground">Hãy tạo tài khoản ứng viên của bạn</p>
    </CardHeader>
    <CardContent className="space-y-4">
      {children}
    </CardContent>
  </>;
}