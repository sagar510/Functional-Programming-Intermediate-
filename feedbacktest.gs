--Q1
num2bin.1=[1]
num2bin.n=num2bin.(n/2)++[rem.n.2]

--Q2
func.[]=0
func.(xs)=func.(init.xs) + pattern.(last.xs).(sol.xs)

pattern.(x::xs).1=x
pattern.(x::xs).n=pattern.xs.(n-1)

sol.[]=0
sol.(x::xs)=1+sol.xs

--Aliter
add.(x::xs)=add1.(x::xs).1
add1.[].n=0
add1.(x::xs).n=pattern.x.n +add1.xs.(n+1)

--pattern.(x::xs).(1)=x
--pattern.(x::xs).n=pattern.xs.(n-1)

--Q3 Prerequisite : Remove duplicacy from list
myremove.[].n=[]
myremove.(x::xs).n=if (x==n) then myremove.xs else x::myremove.xs

--rd.xs=rd2.xs.[]
--rd2.[].ys=ys
--rd2.(x::xs).ys=rd2.(myremove.(x::xs).x).(ys++[x])

--Q6
conv.xs=convert.xs.(length.xs-1)
convert.(x::xs).n=((ord.x-48)*10^n) + convert.xs.(n-1)
convert.[].n=0

coss.xs.ys= if ((conv.xs) + (conv.ys)==0) then ['0'] else cos1.((conv.xs) + (conv.ys))
cos1.0=[]
cos1.n= cos1.(n/10) ++ [chr.(rem.n.10 + 48)]