class Llama < Animal

  attr_accessor :recently_fed

  def initialize(name, breed, recently_fed)

    super(name, breed)

    @recently_fed = recently_fed

  end

end
