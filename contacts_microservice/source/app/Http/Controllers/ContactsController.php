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
       
            $contacts = Contact::all();
            
            return response()->json(['success'=>true,'contacts'=>$contacts]);
       
    }

    public function store(Request $request)
    {
       $contact =  Contact::updateOrCreate(['id' => $request->user_id],
                [
                 'name' => $request->name,
                 'phone' => $request->phone,
                 'address' => $request->address,
                 'userId' => $request->userId,
                ]);        

        return response()->json(['success'=>'Contact saved successfully!','contact'=>$contact]);
    }
}
