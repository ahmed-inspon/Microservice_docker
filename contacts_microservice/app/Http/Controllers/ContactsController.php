<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DataTables;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class ContactsController extends Controller
{
    public function __construct()
    {
        
    } 

    public function index(Request $request)
    {
       
            $contacts = User::select('*')->where('level','!=', 0)->orderByDesc('created_at');
            
            return response()->json(['success'=>true,'contacts'=>$contacts]);
       
    }

    public function store(Request $request)
    {
        User::updateOrCreate(['id' => $request->user_id],
                [
                 'name' => $request->name,
                 'email' => $request->email,
                 'level' => $request->level,
                 'password' => Hash::make($request->password),
                ]);        

        return response()->json(['success'=>'User saved successfully!']);
    }


    public function edit($id)
    {
        $User = User::find($id);
        return response()->json($User);

    }



    public function destroy($id)
    {
        User::find($id)->delete();

        return response()->json(['success'=>'Contact deleted!']);
    }
}
