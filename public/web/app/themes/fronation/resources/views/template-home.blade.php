{{--
  Template Name: 01 - Home
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-home')
  @endwhile
@endsection
