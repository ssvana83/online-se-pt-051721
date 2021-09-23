class Animal

  attr_accessor :name, :breed

  @@all = []

  def initialize(name, breed)
    @name = name
    @breed = breed

    @@all << self
  end

  def self.all
    @@all
  end

  def say_my_name
    "Hello my name is #{name} and I'm an ANIMAL!"
  end

end
