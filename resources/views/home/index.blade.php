@extends('layout.layout')

@section('title')
    {{ $nom_page }}
@stop

@section('content')

    @include("includes.home.banner")
	@include("includes.home.about")
	@include("includes.home.services")
	@include("includes.home.portfolio")

@stop

@section('ajax_page')

	<script type="text/javascript" src="js/ajax/home/home.js"></script>

@stop