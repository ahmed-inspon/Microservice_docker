<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DataTables;
use App\Models\Contact;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


class ContactsController extends Controller
{
    public function __construct()
    {
        
    } 

    public function index(Request $request)
    {
       
            $contacts = Contact::select('*')->where('level','!=', 0)->orderByDesc('created_at');
            
            return response()->json(['success'=>true,'contacts'=>$contacts]);
       
    }

    public function store(Request $request)
    {
        Contact::updateOrCreate(['id' => $request->user_id],
                [
                 'name' => $request->name,
                 'email' => $request->email,
                 'level' => $request->level,
                 'password' => Hash::make($request->password),
                ]);        

        return response()->json(['success'=>'Contact saved successfully!']);
    }


    public function edit($id)
    {
        $Contact = Contact::find($id);
        return response()->json($Contact);

    }



    public function destroy($id)
    {
        Contact::find($id)->delete();

        return response()->json(['success'=>'Contact deleted!']);
    }
}
