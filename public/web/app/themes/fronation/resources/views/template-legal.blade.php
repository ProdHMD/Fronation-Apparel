{{--
  Template Name: 05 - Legal
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-legal')
  @endwhile
@endsection
