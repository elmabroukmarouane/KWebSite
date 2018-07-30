@extends('layout.layout')

@section('title')
    {{ $nom_page }}
@stop

@section('content')

    @include("includes.banner")
    {{--  @include("includes.about.block_about")  --}}
	@include("includes.home.about")
    @include("includes.about.missions")
    @include("includes.about.testimonials")

@stop

@section('ajax_page')

	<script type="text/javascript" src="js/ajax/about/about.js"></script>

@stop