<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Auth;

class LoginController extends Controller
{
    //
    public function login(Request $request){
        if(User::where("email",$request->email)->exists()){
            $user = User::where("email",$request->email)->first();
            if(Hash::check($request->password, $user->password)){
                Auth::login($user);
                $id = $user->id;
                $email = $user->email;
                $name = $user->name;
                $isAuthenticated = Auth::check();

                return response()->json([
                    'message' => 'Login successful', 
                    'userId' => $id, 
                    'email' => $email, 
                    'name' => $name,
                    'isAuthenticated' => $isAuthenticated], 200);
            } else {
                return response()->json(['message' => 'Invalid password'], 401);
            }
        } else {
            return response()->json(['message' => 'User not found'], 404);
        }
    }
    

    public function checkLogin(){
        return Auth::check();
    }

    public function logout() {
        
        return Auth::logout();
      }
}
