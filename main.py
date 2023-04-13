def on_button_pressed_a():
    basic.show_number(input.compass_heading())
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_b():
    basic.show_string("[" + str(input.temperature()) + "]")
input.on_button_pressed(Button.B, on_button_pressed_b)
