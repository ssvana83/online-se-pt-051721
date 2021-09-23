module Walkable

  def take_on_walk
    "Taking #{self.name} out to the park for some sunshine"
  end

  def play_time
    "Let's play!"
  end

end

module WalkableClassMethods

  def say_all_names
    self.all.each do |x|
      puts x.name
    end
  end

end
