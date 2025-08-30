import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { LoginForm } from '@/app/(guest)/auth/login/login-form';


export default function LoginPage() {
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>

        <Card>
          <CardHeader className='text-center'>
            <h2 className='text-2xl font-bold text-[#2C2A30]'>Đăng nhập</h2>
          </CardHeader>

          <CardContent className='space-y-4'>
            <LoginForm />
          </CardContent>
          <CardFooter className='flex justify-between '>
            <Button
              variant='link'
            >
              Đăng ký nhà tuyển dụng
            </Button>
            <Button
              variant='link'
            >
              Đăng ký ứng viên
            </Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}