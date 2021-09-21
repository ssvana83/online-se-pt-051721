require_relative './utilities.rb'

#############

class Movie

  attr_accessor :title, :director, :genre

  @@all = []

  def initialize(title, director, genre)
    @title = title
    @director = director
    @genre = genre

    @@all << self
  end

  def print_movie
    puts @title
  end

  def self.all
    @@all
  end

  def self.find_by(hash)
    self.all.find do |movie|
      movie.send(hash.first[0]) == hash.first[1]
    end
  end

  def self.find_all_by_genre(genre)
    self.all.select do |movie|
      movie.genre == genre
    end
  end

end

#############

m1 = Movie.new("Silence of the Lambs", "Jonathan Demme", "horror")
m2 = Movie.new("Air Bud", "Charles Martin Smith", "psychological thriller")
m3 = Movie.new("Terminator", "James Cameron", "sci-fi")
m4 = Movie.new("Terminator 2", "James Cameron", "psychological thriller")


binding.pry
