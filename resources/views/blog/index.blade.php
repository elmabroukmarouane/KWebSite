@extends('layout.layout')

@section('title')
    {{ $nom_page }}
@stop

@section('content')

    @include("includes.banner")
    @include("includes.blog.blog-list")

@stop