@extends('layout.layout')

@section('title')
    404 - Page non trouvée
@stop

@section('content')

    @include("includes.errors.banner")
    @include("includes.errors.404")

@stop