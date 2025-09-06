import { LoginForm } from "@/app/(guest)/auth/login/login-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="text-center">
            <h2 className="text-2xl font-bold text-[#2C2A30]">Đăng nhập</h2>
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
          </CardContent>
          <CardFooter className="flex flex-col items-center space-y-4">
            <Separator />
            <Label>Chưa có tài khoản?</Label>
            <div>
              <Button variant={'link'}><Link href="/auth/register/employer">Đăng ký nhà tuyển dụng</Link></Button>
              <Button variant={'link'}><Link href="/auth/register/candidate">Đăng ký ứng viên</Link></Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
