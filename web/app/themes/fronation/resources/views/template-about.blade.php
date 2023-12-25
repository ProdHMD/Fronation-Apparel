{{--
  Template Name: 02 - About
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-about')
  @endwhile
@endsection
