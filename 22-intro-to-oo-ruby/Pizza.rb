require "pry"

class Pizza

  puts "On line five self is #{self}"

  # attr_reader :name, :topping, :cheese, :sauce, :crust
  # attr_writer :name, :topping, :cheese, :sauce, :crust
  attr_accessor :name, :topping, :cheese, :sauce, :crust

  def initialize(name, topping, cheese, sauce="red", crust="thin")
    self.name = name
    self.topping = topping
    self.cheese = cheese
    self.sauce = sauce
    self.crust = crust
  end

  def eat_now
    puts "Just eatin my #{name}"
  end

  def what_am_i?
    self
  end

  # READERS

  # def name
  #   @name
  # end
  #
  # def cheese
  #   @cheese
  # end
  #
  # def crust
  #   @crust
  # end
  #
  # def topping
  #   @topping
  # end
  #
  # def sauce
  #   @sauce
  # end

  # WRITERS

  # def name=(new_name)
  #   @name = new_name
  # end
  #
  # def crust=(new_crust)
  #   @crust = new_crust
  # end
  #
  # def sauce=(new_sauce)
  #   @sauce = new_sauce
  # end
  #
  # def topping=(new_topping)
  #   @topping = new_topping
  # end
  #
  # def cheese=(new_cheese)
  #   @cheese = new_cheese
  # end

end

hawaiian = Pizza.new("hawaiian", "pineapple", "mozz", "red", "stuffed crust")
pepperoni = Pizza.new("pepperoni", "pep", "mozz")

binding.pry
