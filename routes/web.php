<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//HomeController
Route::resource('/', 'HomeController');
Route::get('accueil', 'HomeController@index')->name('home');
Route::get('get-content-json/{lang_request}', 'HomeController@getContentJSON')->name('get-content-json');

//AboutController
Route::resource('qui-sommes-nous', 'AboutController');
Route::get('get-content-json-qui-sommes-nous/{lang_request}', 'AboutController@getContentJSON')->name('get-content-json-qui-sommes-nous');

//ServicesController
Route::resource('nos-services', 'ServicesController');

//AssistantitController
Route::resource('assistant-it', 'AssistantitController');

//NotreequipeController
Route::resource('notre-equipe', 'NotreequipeController');

//BlogController
Route::resource('blog', 'BlogController');
Route::get('detail-blog', 'BlogController@detail_blog')->name('detail-blog');

//ContactController
Route::resource('contactez-nous', 'ContactController');
