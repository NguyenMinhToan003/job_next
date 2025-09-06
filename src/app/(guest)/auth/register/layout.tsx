import { Button } from "@/components/ui/button";
import {
    Card,
    CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

export default function RegisterPage({children}: {children: React.ReactNode}) {
return (
<div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
    <div className="w-full max-w-md">
    <Card>
        {children}
        <CardFooter className="flex justify-between ">
        <Button variant="link">
            <Link href="/auth/login">Bạn đã có tài khoản?</Link>
        </Button>
        </CardFooter>
    </Card>
    </div>
</div>
);
}
