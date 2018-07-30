<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AboutController extends Controller
{
    private $url_json = "http://kwebsite.prj:8888/public/";

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (!session()->has('lang') || session()->get('lang') == "undefined") {
            session(['lang' => substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 2)]);
            session()->save();
        }
        $lang = session()->get('lang');
        $json_decode = $this->getLangage($lang);
        $nom_page = $json_decode["qui_sommes_nous"]["nom_page"];
        return view('about.index', compact('nom_page'));
    }

    public function getContentJSON($lang_request)
    {
        if(isset($lang_request) && !empty($lang_request))
        {
            session()->forget('lang');
            session(['lang' => $lang_request]);
            session()->save();
        }
        $lang = session()->get('lang');
        $json_decode = $this->getLangage($lang);
        $nom_page = $json_decode["qui_sommes_nous"]["nom_page"];
        return response()->json([
            $json_decode, 
            'nom_page' => $nom_page,
            'lang_selected' => $lang
        ], 200);
    }

    public function getLangage($lang)
    {
        switch ($lang){
            case "fr":
                //echo "PAGE FR";
                $json_encode = file_get_contents($this->url_json . 'js/content_json/fr/content_json_fr.json');
                break;
            case "en":
                //echo "PAGE EN";
                $json_encode = file_get_contents($this->url_json . 'js/content_json/en/content_json_en.json');
                break;  
            case "ar":
                //echo "PAGE IT";
                $json_encode = file_get_contents($this->url_json . 'js/content_json/ar/content_json_ar.json');
                break;   
            case "es":
                //echo "PAGE EN";
                $json_encode = file_get_contents($this->url_json . 'js/content_json/es/content_json_es.json');
                break;     
            default:
                //echo "PAGE EN - Setting Default";
                $json_encode = file_get_contents($this->url_json . 'js/content_json/fr/content_json_fr.json');
                break;
        }
        return json_decode($json_encode, true);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
