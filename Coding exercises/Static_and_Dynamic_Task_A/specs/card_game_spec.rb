require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game.rb')
require_relative('../card')

class TestCard_game_spec < MiniTest::Test

  def setup()
   @aceofhearts = Card.new("hearts", 1)
   @twoofhearts = Card.new("hearts", 2)
   @threeofhearts = Card.new("hearts", 3)
   @cards = [@aceofhearts, @twoofhearts, @threeofhearts]
   @game = CardGame.new
  end


  def test_checkforAce_true
    expected = true
    actual = @game.checkforAce(@aceofhearts)
    assert_equal(expected, actual)
  end

  def test_checkforAce_false
    expected = false
    actual = @game.checkforAce(@twoofhearts)
    assert_equal(expected, actual)
  end

  def test_highest_card_card1
    expected = @threeofhearts
    actual = @game.highest_card(@threeofhearts, @twoofhearts)
    assert_equal(expected, actual)
  end

  def test_highest_card_card2
    expected = @threeofhearts
    actual = @game.highest_card(@twoofhearts, @threeofhearts)
    assert_equal(expected, actual)
  end

  def test_cards_total
    expected = "You have a total of 6"
    actual = CardGame.cards_total(@cards)
    assert_equal(expected, actual)
  end

end
