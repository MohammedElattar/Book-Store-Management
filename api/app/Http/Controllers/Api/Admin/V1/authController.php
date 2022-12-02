<?php

namespace App\Http\Controllers\Api\Admin\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\V1\authAdmin;
use App\Http\Traits\HttpResponse;
use App\Models\User;
use DateInterval;
use DateTime;
use Illuminate\Support\Facades\Auth;
class authController extends Controller
{
    use HttpResponse;
    public function login(authAdmin $req)
    {
        $credentials = $req->only("email" , 'password');
        if(!Auth::attempt($credentials , 1)){
            return $this->error("Authentication failed" , 401);
        }
        $user = User::where("email" , $credentials['email'])->first(['id' , 'name' , 'email']);
        $exp = new DateTime("now");
        $exp->add(new DateInterval("PT604800S"));
        // return $this->success([
        //     "data" => $user ,
        //     "token" => $user->createToken($user->name , ['*'] , $exp)->plainTextToken ,
        //     "expire at" =>date("Y-m-d h:i:s" , $exp->getTimestamp()) ,
        // ] , "User authenticated successfully");
        return response()->json(['data' => $user])->header("Set-Cookie" , "user=".$user->createToken($user->name , ['*'] , $exp)->plainTextToken.";path=/;domain=127.0.0.1;expires=Thu, 08 Dec 2022 20:00:51 GMT");
    }
}