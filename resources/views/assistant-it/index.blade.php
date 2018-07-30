@extends('layout.layout')

@section('title')
    {{ $nom_page }}
@stop

@section('content')

    @include("includes.banner")
    @include("includes.assistant-it.assistant-it")

@stop