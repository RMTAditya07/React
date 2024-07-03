#create tkinter window
from tkinter import *
root=Tk()
# root.mainloop()

#first example

# my_label=Label(root,text="I am a label widget")
# my_button=Button(root,text="i am a button")
# my_label.pack()
# my_button.pack()
# root.mainloop()

root.title('I am a top level widget')

#create a frame widget for placing menu
my_menu_bar=Frame(root,relief='raised',bd=2)
my_menu_bar.pack(fill=X)

#Create Menu widget 1 and sub menu 1
my_menu_button=Menubutton(my_menu_bar,text='Menu button widget 1',)
my_menu_button.pack(side=LEFT)

#menu widget
my_menu=Menu(my_menu_button,tearoff=0)
my_menu_button['menu']=my_menu
my_menu.add('command',label='Menu Widget 1')

#create Menu1 and submenu 2
menu_button_2=Menubutton(my_menu_bar,text='Menu 2',)
menu_button_2.pack(side=LEFT)
my_menu_2=Menu(menu_button_2,tearoff=0)
menu_button_2['menu']=my_menu_2
my_menu_2.add('command',label='Sub menu 2')

#creating a frame(my_frame_1)
my_frame_1=Frame(root,bd=2,relief=SUNKEN)
my_frame_1.pack(side=LEFT)

#add label to my_frame_1
Label(my_frame_1,text='I am a Label widget').pack()

#add entry widget to my_frame_1
Button(my_frame_1,text='Button widget').pack()

#add check button widget to my_frame_1
Checkbutton(my_frame_1,text='CheckButton Widget').pack()

#add radio buttons to my_frame_1
Radiobutton(my_frame_1,text='Radio button Un',value=1).pack()
Radiobutton(my_frame_1,text='Radio button dos',value=2).pack()
Radiobutton(my_frame_1,text='Radio button Tres',value=3).pack()

#OptionMenu Widget
Label(my_frame_1,text='Example of optionmenu widget').pack()
OptionMenu(my_frame_1,'',"Option A","Option B","Option C").pack()

#adding my_image image

Label(my_frame_1,text='Image fun with bitmap class:').pack()
my_image=BitmapImage(file="gir.xbm")
my_label=Label(my_frame_1,image=my_image)
my_label.image=my_image
my_label.pack()


#create another frame(my_frame_2)to hold a list box,Spinbox Wifget,scale widget
my_frame_2=Frame(root,bd=2,relief=GROOVE)
my_frame_2.pack(side=RIGHT)

#add photimage class wodget tomy_frame_2
Label(my_frame_2,text='Image display').pack()
dance_photo=PhotoImage(file='dance.gif')
dance_photo_label=Label(my_frame_2,image=dance_photo)
dance_photo_label.image=dance_photo
dance_photo_label.pack()

#add my_listbox widget to my_frame_2
Label(my_frame_2,text='Below is an example of my_listBox widget').pack()
my_listbox=Listbox(my_frame_2,height=4)
for line in ['Listbox Choice 1','Choice 2','Choice 3','choice 4']:
    my_listbox.insert(END,line)
my_listbox.pack()

#spinbox widget
Label(my_frame_2,text='Below is an exaample').pack()
Spinbox(my_frame_2,values=(1,2,4,8,10)).pack()

#scale widget
Scale(my_frame_2,from_=0.0,to=100.0,label='Scale widget',orient=HORIZONTAL).pack()

#LabelFrame
label_frame=LabelFrame(my_frame_2,text='Labelframe widget',padx=10,pady=10)
label_frame.pack(padx=10,pady=10)
Entry(label_frame).pack()

#message widget
Message(my_frame_2,text='Message widget').pack()

my_frame_3=Frame(root,bd=2,relief=SUNKEN)

#text widget and associated scrollbar widget
my_text=Text(my_frame_3,height=10,width=40)
file_object=open('textcontent.txt')
file_content=file_object.read()
file_object.close()
my_text.insert(END,file_content)
my_text.pack(side=LEFT,fill=X,padx=5)

#add scrollbar widget to the text widget
my_scrollbar=Scrollbar(my_frame_3,orient=VERTICAL,command=my_text.yview)
my_scrollbar.pack()
my_text.configure(yscrollcommand=my_scrollbar.set)
my_frame_3.pack()

#create another frame 4
my_frame_4=Frame(root).pack()
my_canvas=Canvas(my_frame_4,bg='white',eidth=340,height=80)
my_canvas.pack()
my_canvas.create_oval(20,15,60,60,fill='red')
my_canvas.create_oval(40,15,60,60,fill='grey')
my_canvas.create_text(130,38,text='I am a canvas widget',font=('arial',8,'bold'))

Label(root,text='Below is an example of pabel').pack()
Label(root,text='Notice').pack()
my_paned_window_1=PanedWindow()
my_paned_window_1.pack(fill=BOTH,expand=2)
left_pane_text=Text(my_paned_window_1,height=6,width=15)
my_paned_window_1.add(left_pane_text)
my_paned_window_2=PanedWindow(my_paned_window_1,orient=VERTICAL)
my_paned_window_1.add(my_paned_window_2)
top_pane_text=Text(my_paned_window_2,height=3,width=3)
my_paned_window_2.add(top_pane_text)
bottom_pane_text=Text(my_paned_window_2,height=3,width=3)
my_paned_window_2.add(bottom_pane_text)

root.mainloop()