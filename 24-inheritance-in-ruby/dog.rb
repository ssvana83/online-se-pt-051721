class Dog < Animal

  include Walkable
  extend WalkableClassMethods

  @@all_dogs = []

  def initialize(name, breed)
    super(name, breed)
    @@all_dogs << self
  end

  def self.all
    @@all_dogs
  end

end
