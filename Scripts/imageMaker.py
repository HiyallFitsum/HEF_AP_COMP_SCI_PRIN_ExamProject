# from IPython.display import clear_output
# import json

# smallImageFile = glob('../image/smallpixelimage.png')
# smallImage = cv2.imread(smallImageFile)

# height, width, depth = image.shape

# pixelIndex = 0

# continueCanvasReset = True

# for h in range(height):
#     for w in range(width):
#         image[h, w] = 127

# print("How many pixels would like your canvas to be? (e.g. 5 -> 5x5); Please put a positive integer")
# userResizeVariable = int(input())
# hResizer = height/userResizeVariable
# wResizer = width/userResizeVariable
# image_resized = cv2.resize(image, None, fx=(1/hResizer), fy=(1/wResizer))

# image_resized.shape
# canvasPixels = [[0 for k in range(3)] for l in range(userResizeVariable**2)]


# print("Please use 0 or 1 (0 = black, 1 = white)")
# for i in range(userResizeVariable):
#     print("Row: " + str(i))
#     for j in range(userResizeVariable):
#         pixelIndex += 1
#         print("Pixel " + str(pixelIndex))
#         rowInput = int(input())
#         clear_output()
#         if(rowInput == 0):
#             image_resized[i, j] = 0
#             canvasPixels[pixelIndex-1][2] = "black" 
#         else:
#             image_resized[i, j] = 255
#             canvasPixels[pixelIndex-1][2] = "white" 
#         canvasPixels[pixelIndex-1][0] = i
#         canvasPixels[pixelIndex-1][1] = j
#         fig, ax = plt.subplots(figsize=(10, 10))
#         ax.imshow(image_resized)
#         ax.axis('off')
#         plt.show()
#         print("Height:" + str(i))
#         print("Width: " + str(j))
        
# print(canvasPixels)


# json_data = json.dumps(canvasPixels)

# # Write JSON data into a file
# with open('data.json', 'w') as f:
#     f.write(json_data)
